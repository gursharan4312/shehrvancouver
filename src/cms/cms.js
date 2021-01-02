import CMS from "netlify-cms-app";
import JobWidgetControl from "./JobWidget";
import Allconfessions from "./allConfessionWidget";

CMS.registerWidget("jobwidget", JobWidgetControl);
CMS.registerWidget("allConfessions", Allconfessions);
