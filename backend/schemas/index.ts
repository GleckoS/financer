import calculatorsListing_component from "./components/calculators-listing_component";
import cta_component from "./components/cta_component";
import flexContent_component from "./components/flex-content_component";
import footer_component from "./components/footer_component";
import imageCta_component from "./components/image-cta_component";
import loanCompare_component from "./components/loan-compare_component";
import logosLine_component from "./components/logos-line_component";
import ourPartners_component from "./components/our-partners_component";
import ourTeam_component from "./components/our-team_component";
import seo_component from "./components/seo_component";
import videoPopup_component from "./components/video-popup_component";

const components = [
  calculatorsListing_component,
  cta_component,
  flexContent_component,
  footer_component,
  imageCta_component,
  loanCompare_component,
  logosLine_component,
  ourPartners_component,
  ourTeam_component,
  seo_component,
  videoPopup_component
]

import home_page from "./single-types/home_page";
import global from "./single-types/global";

const singleTypes = [
  global,
  home_page
]

import loan_collection from "./collection-types/loan_collection";

const collectionTypes  = [
  loan_collection
]

const schemaTypes = [...singleTypes, ...collectionTypes, ...components];

export { singleTypes, collectionTypes, components, schemaTypes };
