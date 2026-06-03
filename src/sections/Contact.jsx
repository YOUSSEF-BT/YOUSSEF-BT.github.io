import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bt.youssef.369@gmail.com",
    href: "mailto:bt.youssef.369@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rabat, Morocco",
    href: "#",
  },
];

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: t("contact.success"),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: t("contact.error"),
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("contact.title")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("contact.headline")}{" "}
            <span className="font-serif italic font-normal text-foreground">
              {t("contact.headlineHighlight")}
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground animate-fade-in animation-delay-200">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  type="email"
                  className="block text-xs md:text-sm font-medium mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm md:text-base"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>{t("contact.sending")}</>
                ) : (
                  <>
                    {t("contact.send")}
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-2 md:gap-3
                     p-3 md:p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                         : "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <p className="text-xs md:text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                {t("contact.contactInfo")}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-sm md:text-base font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-primary/30">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm md:text-base font-medium">{t("contact.available")}</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {t("contact.availableDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
