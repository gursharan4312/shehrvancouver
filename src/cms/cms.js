import CMS from "netlify-cms-app";
import JobWidgetControl from "./JobWidget";
import AccomodationControl from "./accomodationWidget";
import Allconfessions from "./allConfessionWidget";

CMS.registerWidget("jobwidget", JobWidgetControl);
CMS.registerWidget("accomodationswidget", AccomodationControl);
CMS.registerWidget("allConfessions", Allconfessions);
