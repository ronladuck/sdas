import React, { useState } from "react";
import {
  Calendar,
  Plus,
  User,
  LogOut,
  Sparkles,
  TrendingUp,
  FileText,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ContentCalendarForm from "../components/dashboard/ContentCalendarForm";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("create"); // Start with create for new users
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentCalendars, setContentCalendars] = useState([]);
  // Removed unused showSuccessMessage state
  const [latestCalendar, setLatestCalendar] = useState(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Get user display name
  const displayName =
    user?.user_metadata?.display_name || user?.email?.split("@")[0] || "User";

  const handleFormSubmit = async (formData) => {
    setIsGenerating(true);
    try {
      // Simulate AI processing
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Mock generated calendar
      const newCalendar = {
        id: Date.now(),
        businessName: formData.businessName,
        industry: formData.industry,
        createdAt: new Date().toISOString(),
        posts: generateMockPosts(formData),
        formData: formData, // Store form data for follow-up
      };

      setContentCalendars([...contentCalendars, newCalendar]);
      setLatestCalendar(newCalendar);
      setActiveTab("success");
    } catch (error) {
      console.error("Failed to generate calendar:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateMockPosts = (formData) => {
    // Mock AI-generated content based on form data
    const posts = [];
    const postTypes = formData.contentTypes || [];

    for (let i = 0; i < 30; i++) {
      const randomType =
        postTypes[Math.floor(Math.random() * postTypes.length)] ||
        "Educational Posts";
      posts.push({
        id: i + 1,
        date: new Date(Date.now() + i * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
        type: randomType,
        title: `${randomType} for ${formData.businessName}`,
        caption: `Engaging ${randomType.toLowerCase()} content tailored for your ${formData.industry} business targeting ${formData.targetAudience.slice(0, 50)}...`,
        hashtags: ["#business", "#content", "#marketing"],
        bestTime: "10:00 AM",
      });
    }

    return posts;
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Welcome back, {displayName}!
        </h2>
        <p className="text-xl opacity-90 mb-6">
          Ready to create amazing content? Let's build your next content
          calendar.
        </p>
        <button
          onClick={() => setActiveTab("create")}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Create New Calendar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Total Calendars
              </h3>
              <p className="text-3xl font-bold text-purple-600">
                {contentCalendars.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Total Posts
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                {contentCalendars.reduce(
                  (total, calendar) => total + calendar.posts.length,
                  0,
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                This Month
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {contentCalendars.length > 0
                  ? contentCalendars[contentCalendars.length - 1].posts.length
                  : 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {contentCalendars.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Calendars
          </h3>
          <div className="space-y-4">
            {contentCalendars.slice(-3).map((calendar) => (
              <div
                key={calendar.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {calendar.businessName}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {calendar.industry} • {calendar.posts.length} posts
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(calendar.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderCalendars = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Your Content Calendars
        </h2>
        <button
          onClick={() => setActiveTab("create")}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>New Calendar</span>
        </button>
      </div>

      {contentCalendars.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No calendars yet
          </h3>
          <p className="text-gray-600 mb-6">
            Create your first AI-powered content calendar to get started.
          </p>
          <button
            onClick={() => setActiveTab("create")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Plus size={20} />
            <span>Create Your First Calendar</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {contentCalendars.map((calendar) => (
            <div
              key={calendar.id}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {calendar.businessName}
                </h3>
                <span className="text-sm text-gray-500">
                  {new Date(calendar.createdAt).toLocaleDateString()}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{calendar.industry}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  {calendar.posts.length} posts generated
                </span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              </div>

              <div className="space-y-2 mb-4">
                {calendar.posts.slice(0, 3).map((post) => (
                  <div
                    key={post.id}
                    className="text-sm text-gray-600 bg-gray-50 p-2 rounded"
                  >
                    <strong>{post.type}:</strong> {post.title}
                  </div>
                ))}
                {calendar.posts.length > 3 && (
                  <div className="text-sm text-gray-500">
                    +{calendar.posts.length - 3} more posts...
                  </div>
                )}
              </div>

              <button className="w-full bg-purple-100 text-purple-700 py-2 rounded-lg font-semibold hover:bg-purple-200 transition-colors">
                View Full Calendar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderCreate = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        {contentCalendars.length === 0 ? (
          <>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome! Let's Create Your First Content Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Tell us about your business and we'll generate a personalized
              30-day content calendar with engaging posts, captions, and optimal
              posting times.
            </p>
            <p className="text-lg text-purple-600 font-semibold">
              After we create your calendar, Mark will reach out within 24 hours
              to help you get started! 🚀
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Create New Content Calendar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI will analyze your business information and create a
              personalized 30-day content calendar with engaging posts,
              captions, and optimal posting times.
            </p>
          </>
        )}
      </div>

      <ContentCalendarForm
        onSubmit={handleFormSubmit}
        isLoading={isGenerating}
      />
    </div>
  );

  const renderSuccess = () => (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🎉 Your Content Calendar is Ready!
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          We've generated a personalized 30-day content calendar for{" "}
          <strong>{latestCalendar?.businessName}</strong>
        </p>
      </div>

      {/* Calendar Preview */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Your Content Calendar
          </h3>
          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
            {latestCalendar?.posts.length} posts generated
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {latestCalendar?.posts.slice(0, 4).map((post, index) => (
            <div key={post.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-600">
                  {post.type}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{post.caption}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.hashtags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  Best time: {post.bestTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setActiveTab("calendars")}
            className="bg-purple-100 text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-purple-200 transition-colors"
          >
            View Full Calendar ({latestCalendar?.posts.length} posts)
          </button>
        </div>
      </div>

      {/* Follow-up Message */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What's Next?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            <strong>Mark@StopDropScroll.co</strong> will be reaching out to you
            within the next <strong>24 hours</strong> to discuss your content
            strategy and help you implement your new calendar.
          </p>
          <div className="bg-white rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              During our call, we'll cover:
            </h4>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Customizing your content calendar to perfectly match your
                  brand
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Setting up your content creation and posting workflow
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Discussing additional services like photography and
                  videography
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Answering any questions about your content strategy</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab("calendars")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Calendars
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Create Another Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold gradient-text">
                Content Calendar AI
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">{displayName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: TrendingUp },
              { id: "calendars", label: "My Calendars", icon: Calendar },
              { id: "create", label: "Create New", icon: Plus },
            ]
              .filter((tab) => activeTab !== "success" || tab.id !== "create")
              .map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            {activeTab === "success" && (
              <div className="flex items-center space-x-2 py-4 px-1 border-b-2 border-green-500 text-green-600 font-medium text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Calendar Created</span>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && renderOverview()}
        {activeTab === "calendars" && renderCalendars()}
        {activeTab === "create" && renderCreate()}
        {activeTab === "success" && renderSuccess()}
      </main>
    </div>
  );
};

export default DashboardPage;
