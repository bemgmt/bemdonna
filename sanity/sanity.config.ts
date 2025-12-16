import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'donna-cms',
  title: 'DONNA CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    deskTool(),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
  theme: {
    '--brand-primary': '#8A2FFF',
    '--brand-secondary': '#3DE0FF',
  },
})

