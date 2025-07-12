import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Analytics } from "@/lib/types";
import { getAnalytics } from "@/service/analytics/analytics";
import { useEffect, useState } from "react";

const AnalyticsPage = () => {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await getAnalytics();
        setAnalytics(data);
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-32"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!analytics) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50 ">
      <div className="max-w-7xl mx-auto px-6 text-center pt-16 pb-24">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Track your website performance</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6 text-center pt-16 pb-24">
          <Card className="hover:shadow-lg transition-shadow duration-200 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-2xl">👁️</span>
                Page Visits
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-gray-900">{analytics.pageVisit.toLocaleString()}</div>
              <p className="text-sm text-gray-500 mt-1">Total page views</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                Form Submissions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-gray-900">{analytics.storage.toLocaleString()}</div>
              <p className="text-sm text-gray-500 mt-1">Completed forms</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
