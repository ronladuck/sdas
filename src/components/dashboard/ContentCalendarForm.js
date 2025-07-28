import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Building, 
  Target, 
  Palette, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const schema = yup.object({
  businessName: yup.string().required('Business name is required'),
  industry: yup.string().required('Industry is required'),
  targetAudience: yup.string().required('Target audience is required'),
  businessGoals: yup.string().required('Business goals are required'),
  contentTypes: yup.array().min(1, 'Select at least one content type'),
  postingFrequency: yup.string().required('Posting frequency is required'),
  brandVoice: yup.string().required('Brand voice is required'),
  specialEvents: yup.string(),
  competitors: yup.string(),
  currentChallenges: yup.string().required('Current challenges are required'),
});

const ContentCalendarForm = ({ onSubmit, isLoading }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      contentTypes: []
    }
  });

  const contentTypes = watch('contentTypes') || [];

  const handleContentTypeChange = (type) => {
    const current = getValues('contentTypes') || [];
    if (current.includes(type)) {
      setValue('contentTypes', current.filter(t => t !== type));
    } else {
      setValue('contentTypes', [...current, type]);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Building className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your business</h3>
              <p className="text-gray-600">Help us understand your brand and industry</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                {...register('businessName')}
                type="text"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.businessName ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your business name"
              />
              {errors.businessName && (
                <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry *
              </label>
              <select
                {...register('industry')}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.industry ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select your industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="food-beverage">Food & Beverage</option>
                <option value="fitness">Fitness & Wellness</option>
                <option value="education">Education</option>
                <option value="real-estate">Real Estate</option>
                <option value="travel">Travel & Tourism</option>
                <option value="fashion">Fashion & Beauty</option>
                <option value="other">Other</option>
              </select>
              {errors.industry && (
                <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience *
              </label>
              <textarea
                {...register('targetAudience')}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.targetAudience ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Describe your ideal customers (age, interests, demographics, etc.)"
              />
              {errors.targetAudience && (
                <p className="mt-1 text-sm text-red-600">{errors.targetAudience.message}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Goals & Content</h3>
              <p className="text-gray-600">What do you want to achieve with your content?</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Goals *
              </label>
              <textarea
                {...register('businessGoals')}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.businessGoals ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="What are your main business objectives? (increase sales, brand awareness, lead generation, etc.)"
              />
              {errors.businessGoals && (
                <p className="mt-1 text-sm text-red-600">{errors.businessGoals.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Content Types * (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Educational Posts',
                  'Behind the Scenes',
                  'Product Showcases',
                  'Customer Stories',
                  'Industry News',
                  'Tips & Tutorials',
                  'Inspirational Quotes',
                  'User Generated Content'
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={contentTypes.includes(type)}
                      onChange={() => handleContentTypeChange(type)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
              {errors.contentTypes && (
                <p className="mt-1 text-sm text-red-600">{errors.contentTypes.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Posting Frequency *
              </label>
              <select
                {...register('postingFrequency')}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.postingFrequency ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select posting frequency</option>
                <option value="daily">Daily (7 posts/week)</option>
                <option value="5-times-week">5 times per week</option>
                <option value="3-times-week">3 times per week</option>
                <option value="twice-week">Twice per week</option>
                <option value="weekly">Weekly</option>
              </select>
              {errors.postingFrequency && (
                <p className="mt-1 text-sm text-red-600">{errors.postingFrequency.message}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Brand Voice & Style</h3>
              <p className="text-gray-600">How should your brand sound and feel?</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand Voice & Tone *
              </label>
              <select
                {...register('brandVoice')}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.brandVoice ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select your brand voice</option>
                <option value="professional">Professional & Authoritative</option>
                <option value="friendly">Friendly & Approachable</option>
                <option value="casual">Casual & Conversational</option>
                <option value="playful">Playful & Fun</option>
                <option value="inspirational">Inspirational & Motivating</option>
                <option value="educational">Educational & Informative</option>
              </select>
              {errors.brandVoice && (
                <p className="mt-1 text-sm text-red-600">{errors.brandVoice.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Events & Holidays
              </label>
              <textarea
                {...register('specialEvents')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Any special events, holidays, or seasonal campaigns you want to include? (Black Friday, company anniversary, etc.)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Competitors
              </label>
              <textarea
                {...register('competitors')}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Who are your main competitors? (This helps us differentiate your content)"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Final Details</h3>
              <p className="text-gray-600">Help us create the perfect content strategy</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Content Challenges *
              </label>
              <textarea
                {...register('currentChallenges')}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                  errors.currentChallenges ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="What challenges are you facing with content creation? What would you like our AI to help you solve?"
              />
              {errors.currentChallenges && (
                <p className="mt-1 text-sm text-red-600">{errors.currentChallenges.message}</p>
              )}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <h4 className="text-lg font-semibold text-gray-900">Ready to Generate!</h4>
              </div>
              <p className="text-gray-700">
                Our AI will analyze your responses and create a personalized 30-day content calendar 
                with post ideas, captions, and optimal posting times tailored to your business.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {renderStep()}

        {/* Navigation buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Next</span>
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>Generate Calendar</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContentCalendarForm; 