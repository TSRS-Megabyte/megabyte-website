import Swup from "swup";
import SwupSlideTheme from "@swup/slide-theme";
import SwupFadeTheme from "@swup/fade-theme";

const swup = new Swup({
  plugins: [new SwupFadeTheme(), new SwupSlideTheme()],
});
