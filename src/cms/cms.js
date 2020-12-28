import CMS from "netlify-cms-app";
import JobWidgetControl from "../components/JobWidget";
import Allconfessions from "../components/allConfessionWidget";
import "./admin.css";

CMS.registerWidget("jobwidget", JobWidgetControl);
CMS.registerWidget("allConfessions", Allconfessions);
