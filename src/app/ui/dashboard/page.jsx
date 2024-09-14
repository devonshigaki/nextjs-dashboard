import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData, fetchRevenue, fetchLatestInvoices } from '../../lib/data'; // Correct imports

export default async function Page() {
  try {
    // Fetching card data (i.e., totalPaidInvoices, totalPendingInvoices, etc.)
    const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = await fetchCardData(); // Fetch card data
    
    // Fetching revenue and latest invoices
    const revenue = await fetchRevenue();   // Fetch revenue data
    const latestInvoices = await fetchLatestInvoices();  // Fetch latest five invoices

    console.log({ totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers, revenue, latestInvoices });

    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Collected" value={totalPaidInvoices} type="collected" />
          <Card title="Pending" value={totalPendingInvoices} type="pending" />
          <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
          <Card title="Total Customers" value={numberOfCustomers} type="customers" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart revenue={revenue} />  {/* Passing revenue data */}
          <LatestInvoices latestInvoices={latestInvoices} />  {/* Passing latest invoices data */}
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error rendering dashboard:', error);
    return <div>Error loading dashboard data.</div>;
  }
}
