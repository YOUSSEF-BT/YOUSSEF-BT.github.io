(() => {
  const projectTitle = "Real-Time Road Accident Detection — Computer Vision & Deep Learning";
  const allowedAlts = new Set([
    `${projectTitle} preview`,
    `${projectTitle} home-page preview`,
  ]);

  const partUrls = Array.from({ length: 7 }, (_, index) =>
    `https://raw.githubusercontent.com/YOUSSEF-BT/YOUSSEF-BT.github.io/main/build-assets/pfe-cover/part0${index}.b64?v=c370c143`
  );

  const applyCover = (cover) => {
    document.querySelectorAll("img").forEach((image) => {
      if (!allowedAlts.has(image.alt || "")) return;
      if (image.dataset.pfePhotoCover === "applied") return;
      image.dataset.pfePhotoCover = "applied";
      image.src = cover;
      image.removeAttribute("srcset");
      image.style.objectFit = "cover";
    });
  };

  Promise.all(
    partUrls.map((url) =>
      fetch(url, { cache: "no-store" }).then((response) => {
        if (!response.ok) throw new Error(`Unable to load PFE cover part: ${url}`);
        return response.text();
      })
    )
  )
    .then((parts) => {
      const cover = `data:image/webp;base64,${parts.join("").replace(/\s+/g, "")}`;
      applyCover(cover);
      new MutationObserver(() => applyCover(cover)).observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
      window.addEventListener("hashchange", () => setTimeout(() => applyCover(cover), 0));
    })
    .catch((error) => console.error("PFE cover loading failed:", error));
})();
