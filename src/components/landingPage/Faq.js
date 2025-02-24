import { useState } from "react";
import { FiSearch, FiChevronDown, FiChevronUp, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { faqData } from "../../assets/constant/datas/data";

const FAQAccordion = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState({});
  const [helpfulAnswers, setHelpfulAnswers] = useState({});



  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleHelpful = (questionId, isHelpful) => {
    setHelpfulAnswers(prev => ({
      ...prev,
      [questionId]: isHelpful
    }));
  };

  const filteredFAQ = Object.entries(faqData).reduce((acc, [category, questions]) => {
    const filteredQuestions = questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredQuestions.length > 0) {
      acc[category] = filteredQuestions;
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h1>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        <div className="space-y-6">
          {Object.entries(filteredFAQ).map(([category, questions]) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full p-6 text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleCategory(category)}
                aria-expanded={openCategories[category]}
              >
                <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
                {openCategories[category] ? (
                  <FiChevronUp className="text-xl" />
                ) : (
                  <FiChevronDown className="text-xl" />
                )}
              </button>

              {openCategories[category] && (
                <div className="p-6 space-y-6">
                  {questions.map((item) => (
                    <div key={item.id} className="space-y-3">
                      <h3 className="font-medium text-gray-900">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                      <div className="flex items-center space-x-4 pt-2">
                        <button
                          className={`flex items-center space-x-1 ${
                            helpfulAnswers[item.id] === true
                              ? "text-green-600"
                              : "text-gray-400"
                          }`}
                          onClick={() => toggleHelpful(item.id, true)}
                        >
                          <FiThumbsUp />
                          <span>Helpful</span>
                        </button>
                        <button
                          className={`flex items-center space-x-1 ${
                            helpfulAnswers[item.id] === false
                              ? "text-red-600"
                              : "text-gray-400"
                          }`}
                          onClick={() => toggleHelpful(item.id, false)}
                        >
                          <FiThumbsDown />
                          <span>Not Helpful</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {Object.keys(filteredFAQ).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No FAQs found matching your search criteria.
            </p>
          </div>
        )}

      
      </div>
    </div>
  );
};

export default FAQAccordion;