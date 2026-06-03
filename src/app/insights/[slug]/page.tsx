import { notFound } from "next/navigation";
import { INSIGHTS } from "@/lib/data";
import InsightArticle from "@/components/InsightArticle";

export async function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) return {};
  return {
    title: `${insight.title} — Nakhul Krishna`,
    description: insight.summary,
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) notFound();
  return <InsightArticle insight={insight} />;
}
