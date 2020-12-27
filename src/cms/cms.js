import CMS from "netlify-cms-app";
import JobWidgetControl from "../components/JobWidget";
import './admin.css'

CMS.registerWidget("jobwidget", JobWidgetControl);
