import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Check, Mail } from "lucide-react";
import { useState } from "react";

export const SocialShare = ({ title, url, description }) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:bg-sky-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:bg-blue-700",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
      color: "hover:bg-green-600",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Share:</span>
      <div className="flex items-center gap-1">
        {shareLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full glass hover:text-white transition-all ${social.color}`}
            aria-label={`Share on ${social.name}`}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <LinkIcon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export const SocialShareButton = ({
  title,
  url,
  description,
  triggerClassName = "",
  triggerIconClassName = "w-4 h-4",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: "hover:bg-sky-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: "hover:bg-blue-700",
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
      color: "hover:bg-green-600",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsOpen(false);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const buttonClassName =
    triggerClassName ||
    "p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName}
        aria-label="Share"
      >
        <Share2 className={triggerIconClassName} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 bottom-full mb-2 glass rounded-xl p-2 flex flex-col gap-1 z-50 min-w-[160px]">
            {shareLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:text-white transition-all ${social.color}`}
                onClick={() => setIsOpen(false)}
              >
                <social.icon className="w-4 h-4" />
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-left"
            >
              <LinkIcon className="w-4 h-4" />
              <span className="text-sm">Copy Link</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
