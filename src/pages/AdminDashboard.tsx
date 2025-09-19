import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Users, 
  MessageSquare, 
  Star,
  TrendingUp,
  Calendar,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download
} from "lucide-react";

// Mock data for dashboard
const dashboardStats = {
  totalRooms: 120,
  occupiedRooms: 89,
  availableRooms: 31,
  pendingInquiries: 12,
  averageRating: 4.6,
  monthlyRevenue: 156800,
  occupancyRate: 74.2
};

const recentInquiries = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    type: "Room Availability",
    roomPreference: "Single",
    date: "2024-01-15",
    status: "pending"
  },
  {
    id: "2", 
    name: "Michael Chen",
    email: "m.chen@email.com",
    type: "Tour Request",
    roomPreference: "Double",
    date: "2024-01-14",
    status: "responded"
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    email: "emma.r@email.com", 
    type: "Pricing Information",
    roomPreference: "Suite",
    date: "2024-01-14",
    status: "pending"
  }
];

const recentReviews = [
  {
    id: "1",
    studentName: "Alex Thompson",
    rating: 5,
    comment: "Excellent facilities and very helpful staff!",
    room: "Deluxe Single Room",
    date: "2024-01-14",
    status: "approved"
  },
  {
    id: "2",
    studentName: "Lisa Park", 
    rating: 4,
    comment: "Great location and clean rooms. WiFi could be faster.",
    room: "Twin Share Room",
    date: "2024-01-13",
    status: "pending"
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-light to-accent-light">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your dormitory operations and monitor key metrics
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rooms</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalRooms}</div>
              <p className="text-xs text-muted-foreground">
                {dashboardStats.availableRooms} available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.occupancyRate}%</div>
              <p className="text-xs text-muted-foreground">
                {dashboardStats.occupiedRooms} occupied
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Inquiries</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.pendingInquiries}</div>
              <p className="text-xs text-muted-foreground">
                Require response
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.averageRating}</div>
              <p className="text-xs text-muted-foreground">
                From student reviews
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="rooms">Room Management</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Revenue Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Monthly Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${dashboardStats.monthlyRevenue.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    +12.5% from last month
                  </p>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Room
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Maintenance
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Bulk Notification
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Generate Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Recent Inquiries</h3>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <Card key={inquiry.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{inquiry.name}</h4>
                        <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                      </div>
                      <Badge variant={inquiry.status === "pending" ? "destructive" : "default"}>
                        {inquiry.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Type:</span> {inquiry.type}
                      </div>
                      <div>
                        <span className="font-medium">Preference:</span> {inquiry.roomPreference}
                      </div>
                      <div>
                        <span className="font-medium">Date:</span> {inquiry.date}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" className="btn-hero">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Respond
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Recent Reviews</h3>
              <Button>
                <Star className="mr-2 h-4 w-4" />
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {recentReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{review.studentName}</h4>
                        <p className="text-sm text-muted-foreground">{review.room}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <Badge variant={review.status === "pending" ? "destructive" : "default"}>
                          {review.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="mr-2 h-4 w-4" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Rooms Tab */}
          <TabsContent value="rooms" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Room Management</h3>
              <Button className="btn-hero">
                <Plus className="mr-2 h-4 w-4" />
                Add New Room
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Building2 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Room Management Coming Soon
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    This section will allow you to add, edit, and manage room listings with full CRUD operations.
                  </p>
                  <Button variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}