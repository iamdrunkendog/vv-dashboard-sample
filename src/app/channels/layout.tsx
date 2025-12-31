import { channels } from "@/data";
import React from "react";

export async function generateStaticParams() {
  return channels.map((channel) => ({
    slug: [channel.id, channel.name.substring(1)], // Remove '#' from name
  }));
}

export default function ChannelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
