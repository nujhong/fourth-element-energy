import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import GeothermalPreview from "./cms-preview-templates/geothermal";
import PurposePreview from "./cms-preview-templates/purpose";
import TeamPreview from "./cms-preview-templates/team";
import ResearchPreview from "./cms-preview-templates/research";
import MediaPreview from "./cms-preview-templates/media";
import ProjectPreview from "./cms-preview-templates/project";

CMS.registerPreviewStyle("/css/main.css");

CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("geothermal", GeothermalPreview);
CMS.registerPreviewTemplate("purpose", PurposePreview);
CMS.registerPreviewTemplate("team", TeamPreview);
CMS.registerPreviewTemplate("research", ResearchPreview);
CMS.registerPreviewTemplate("media", MediaPreview);
CMS.registerPreviewTemplate("projects", ProjectPreview);
