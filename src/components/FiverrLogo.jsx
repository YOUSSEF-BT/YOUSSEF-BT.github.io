export const FIVERR_PROFILE_URL = "https://www.fiverr.com/youssef_bouzit";
export const FIVERR_LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Fiverr_logo.svg";

export const FiverrLogo = ({ className = "" }) => (
  <img
    src={FIVERR_LOGO_URL}
    alt="Fiverr"
    className={className}
    loading="lazy"
  />
);
