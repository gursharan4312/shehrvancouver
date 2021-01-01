import CMS from "netlify-cms-app";
import JobWidgetControl from "./JobWidget";
import Allconfessions from "./allConfessionWidget";
import "./admin.css";

CMS.registerWidget("jobwidget", JobWidgetControl);
CMS.registerWidget("allConfessions", Allconfessions);
