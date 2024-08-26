import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import TopicGraph from "@/components/apex-charts/TopicGraph";
import PieChart from "@/components/apex-charts/PieChart";
import InvestmentSummary from "./InvestmentSummary";

export default function DashboardPage() {

// Data series for the chart
const series = [{
name: 'Topic Popularity', // Name of the series
data: [23, 44, 56, 75, 56, 55, 60, 69] // Data points for the series
}];
      
 // Categories for the x-axis
const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

        
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

    <div className="mx-auto mt-8">
      <h1 className="mb-4 text-3xl font-bold dark:text-emerald-700">Investment Summary</h1>

      {/* <TopicGraph series={series} categories={categories} /> */}
      {/* <PieChart /> */}
      <InvestmentSummary />
    </div>

      {/* <PlaceholderContent /> */}
    </ContentLayout>
  );
}
