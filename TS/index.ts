interface Intern {
    fullName: string;
    course: Course;
    animal: string;
    currentStep: () => number;
    coordinators: string[];
    commitment: Commitment;
    generalInfo: GeneralInfo;
    contactInfo: ContactInfo;
    socialLinks: SocialLinks;
}

interface Commitment {
    text: string;
    date: Date;
}

interface GeneralInfo {
    city: string;
    university: string;
    fieldOfStudy: string;
    experiences: string;
}

interface ContactInfo {
    phone: string;
    email: string;
    telegram: string;
    skype: string;
}

interface SocialLinks {
    linkedin: string;
    twitter: string;
    github: string;
    jsfiddle: string;
    stackoverflow: string;
    repl: string;
    typingClub: string;
}

interface Course {
    courseTitle: "Web" | "Machine Learning" | "C#";
    steps: Step[];
    progress: number;
    startDate: Date;
    endDate: Date;
}

interface Step {
    startDate: Date;
    promises: Date[];
    completeDate: Date;
    studyItems: StudyItem[];
    tasks: Task[];
    mentoringCourse: MentoringCourse;
    youtubeLink: string;
    coordinatorNote: string[];
    technicalMentorsNote: string[];
    mentorsNote: string[];
    isDone: () => boolean;
}

interface StudyItem {
    title: string;
    telegramPost: [string, Date][];
    tweeterPost: [string, Date][];
    linkedinPost: [string, Date][];
    isDone: () => boolean;
}

interface Task {
    title: string;
    telegramPost: [string, Date][];
    tweeterPost: [string, Date][];
    linkedinPost: [string, Date][];
    jsfiddleLink?: string;
    githubLink?: string;
    isDone: () => boolean;
}

interface MentoringCourse {
    courseTitle: "Communication" | "Couching";
    videoLinks: string[];
    videoReportLinks: string[];
    progress: () => number;
    isDone: () => boolean;
    notes: string[];
}
