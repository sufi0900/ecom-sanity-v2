import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import StudioHeader from "@/components/StudioHeader";
import { codeInput } from "@sanity/code-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "sanity_ecom",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioHeader,
    },
  },
});
