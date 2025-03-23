import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

document.addEventListener("DOMContentLoaded", () => {
    const lightboxElements = document.querySelectorAll("a[data-fancybox]");

    console.log("Fancybox Found Elements:", lightboxElements); // ✅ Debugging Output

    if (lightboxElements.length === 0) {
        console.warn("No elements found with [data-fancybox]");
        return; // ✅ Prevent Fancybox from running if no images exist
    }

    Fancybox.bind("[data-fancybox]", {
        groupAll: false,
        hideScrollbar: true,
        // Thumbs: {
        //     autoStart: false,
        // },
        // Toolbar: {
        //     display: ["zoom", "close"],
        // },
    });
});
