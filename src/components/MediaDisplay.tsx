import { useState } from "react";
import { Play, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type MediaType = 'image' | 'video' | 'google-drive' | 'youtube';

interface MediaDisplayProps {
  mediaType: MediaType;
  mediaUrl: string;
  thumbnail?: string;
  title: string;
  className?: string;
}

const MediaDisplay = ({ mediaType, mediaUrl, thumbnail, title, className = "" }: MediaDisplayProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [error, setError] = useState(false);

  const getGoogleDriveEmbedUrl = (url: string) => {
    // Extract file ID from Google Drive URL
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return url;
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // Extract video ID from YouTube URL
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url;
  };

  const handlePlayClick = () => {
    setIsLoading(true);
    setShowVideo(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const renderThumbnail = () => (
    <div className="relative w-full h-full group">
      {thumbnail ? (
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center gradient-accent">
          <div className="text-center">
            <Play className="h-16 w-16 text-white/70 mx-auto mb-4" />
            <p className="text-white/90 text-lg font-medium capitalize">
              {mediaType === 'google-drive' ? 'Drive File' : mediaType}
            </p>
          </div>
        </div>
      )}
      
      {/* Play overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
        <Button
          size="lg"
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 border-white/30"
          onClick={handlePlayClick}
        >
          <Play className="h-6 w-6 mr-2" />
          Play
        </Button>
      </div>
    </div>
  );

  const renderVideo = () => (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
          <Loader2 className="h-8 w-8 animate-spin text-white" />
        </div>
      )}
      
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        muted
        onLoadStart={() => setIsLoading(false)}
        onError={() => setError(true)}
      >
        <source src={mediaUrl} type="video/mp4" />
        <source src={mediaUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  const renderEmbed = () => {
    const embedUrl = mediaType === 'google-drive' 
      ? getGoogleDriveEmbedUrl(mediaUrl)
      : getYouTubeEmbedUrl(mediaUrl);
    
    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        )}
        
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          onError={() => setError(true)}
        />
      </div>
    );
  };

  const renderImage = () => (
    <img 
      src={mediaUrl} 
      alt={title}
      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
      onError={() => setError(true)}
    />
  );

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-destructive/10 border border-destructive/20 rounded-lg">
        <div className="text-center">
          <ExternalLink className="h-12 w-12 text-destructive/60 mx-auto mb-2" />
          <p className="text-destructive text-sm">Failed to load media</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {mediaType === 'image' && renderImage()}
      {mediaType === 'video' && (showVideo ? renderVideo() : renderThumbnail())}
      {(mediaType === 'google-drive' || mediaType === 'youtube') && (showVideo ? renderEmbed() : renderThumbnail())}
    </div>
  );
};

export default MediaDisplay;