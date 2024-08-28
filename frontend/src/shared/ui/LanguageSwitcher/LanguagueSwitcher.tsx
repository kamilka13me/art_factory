import React, { useState } from 'react';

interface LanguageSwitcherProps {
  languages: string[];
}

const Svg: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <svg
      className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="blue"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(languages[0] || 'УКР');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative cursor-pointer select-none" onClick={toggleDropdown}>
      <div
        className={`py-[5px] px-2 flex items-center bg-base/text rounded-[16px] text-base/text_dark font-semibold`}
      >
        {selectedLanguage}
        <Svg isOpen={isOpen} />
      </div>
      {isOpen && (
        <div className="absolute top-0 left-0 flex flex-col">
          <div
            className={`py-[5px] px-2 flex items-center bg-[#B6B6B6] rounded-t-[16px]`}
          >
            {selectedLanguage}
            <Svg isOpen={isOpen} />
          </div>
          <div className="flex flex-col bg-base/text rounded-b-[16px]">
            {languages
              .filter((language) => language !== selectedLanguage) // Виключаємо вибрану мову
              .map((language) => (
                <div
                  key={language}
                  className="flex py-[5px] px-2 text-base/text_dark font-semibold"
                  onClick={() => selectLanguage(language)}
                >
                  {language}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
