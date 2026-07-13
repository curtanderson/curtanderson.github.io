(() => {
  "use strict";

  const PHOTOS = [
    { path: "photos/arch.jpg", alt: "Ornate stone arch framed by pale foliage.", position: "50% 45%" },
    { path: "photos/beach.jpg", alt: "Rocky beach in warm evening light.", position: "50% 55%" },
    { path: "photos/bluewall.jpg", alt: "Small white window in a blue brick wall.", position: "50% 45%" },
    { path: "photos/bridge.jpg", alt: "Pedestrian suspension bridge disappearing into mist.", position: "50% 50%" },
    { path: "photos/bridge2.jpg", alt: "Illuminated cable bridge over a river at dusk.", position: "55% 50%" },
    { path: "photos/clock.jpg", alt: "Industrial hanging clock beneath a metal roof.", position: "50% 45%" },
    { path: "photos/clocks.jpg", alt: "Outdoor clocks on poles against green trees.", position: "50% 40%" },
    { path: "photos/cn-tower-bathurst-street-bw.jpg", alt: "Toronto rail corridor and the CN Tower in black and white.", position: "50% 48%" },
    { path: "photos/cn-tower-bathurst-street.jpg", alt: "Toronto rail corridor and the CN Tower.", position: "50% 42%" },
    { path: "photos/cn-tower-trillium.jpg", alt: "CN Tower above the harbor in fog and autumn color.", position: "50% 40%" },
    { path: "photos/cn-tower.jpg", alt: "CN Tower disappearing into fog.", position: "50% 25%" },
    { path: "photos/gehry.jpg", alt: "Angular metal building facade viewed from below.", position: "50% 45%" },
    { path: "photos/green.jpg", alt: "Wet green leaves surrounding one pale leaf.", position: "50% 50%" },
    { path: "photos/lighthouse.jpg", alt: "Lighthouse and elevated walkway in fog.", position: "35% 50%" },
    { path: "photos/no_walking.jpg", alt: "No-pedestrians symbol painted on a path.", position: "50% 65%" },
    { path: "photos/pei_lighthouse.jpg", alt: "Red-and-white lighthouse seen through tall grass.", position: "45% 42%" },
    { path: "photos/tree.jpg", alt: "Large branching tree viewed from below.", position: "50% 45%" },
    { path: "photos/waterfall.jpg", alt: "Tiered waterfall framed by green forest.", position: "50% 48%" },
  ];

  function selectPhotoSet(photos, count) {
    const shuffled = [...photos];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const replacementIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[replacementIndex]] = [
        shuffled[replacementIndex],
        shuffled[index],
      ];
    }

    return shuffled.slice(0, count);
  }

  function createPhoto(photo, className, eager) {
    const image = document.createElement("img");
    image.className = className;
    image.src = photo.path;
    image.alt = photo.alt;
    image.style.objectPosition = photo.position;
    image.decoding = "async";
    image.loading = eager ? "eager" : "lazy";
    return image;
  }

  function enhancePhotoPlate() {
    const picture = document.querySelector("#picture");
    const fallback = picture?.querySelector(".photo-fallback");
    const caption = picture?.querySelector(".picture-caption");
    if (!picture || !fallback || !caption || PHOTOS.length < 3) return;

    const selected = selectPhotoSet(PHOTOS, 3);
    const grid = document.createElement("div");
    grid.className = "photo-grid";
    grid.append(
      createPhoto(selected[0], "photo-primary", true),
      createPhoto(selected[1], "photo-secondary", false),
      createPhoto(selected[2], "photo-secondary", false),
    );

    fallback.replaceWith(grid);
    caption.textContent = "Photographs by Curt Anderson";
  }

  document.addEventListener("DOMContentLoaded", enhancePhotoPlate);
})();
