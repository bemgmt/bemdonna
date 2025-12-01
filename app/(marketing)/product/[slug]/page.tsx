import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {}
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  notFound()
}

