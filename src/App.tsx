import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import PlatformPage from "./pages/Platform";
import SolutionsPage from "./pages/Solutions";
import PricingPage from "./pages/Pricing";
import ResourcesPage from "./pages/Resources";
import BlogPostPage from "./pages/BlogPost";
import NotFoundPage from "./pages/NotFound";
import ShowcasePage from "./pages/Showcase";

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HelmetProvider>
  );
}
