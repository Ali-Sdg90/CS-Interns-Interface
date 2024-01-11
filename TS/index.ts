interface InternInterface {
    fullName: string;
    course: CourseInterface;
    animal: string;
    currentStep: () => number;
    coordinators: string[];
    commitment: CommitmentInterface;
    generalInfo: GeneralInfoInterface;
    contactInfo: ContactInfoInterface;
    socialLinks: SocialLinksInterface;
}

interface CommitmentInterface {
    text: string;
    date: Date;
}

interface GeneralInfoInterface {
    city: string;
    university: string;
    fieldOfStudy: string;
    experiences: string;
}

interface ContactInfoInterface {
    phone: string;
    email: string;
    telegram: string;
    skype: string;
}

interface SocialLinksInterface {
    linkedin: string;
    twitter: string;
    github: string;
    jsfiddle: string;
    stackoverflow: string;
    repl: string;
    typingClub: string;
}

interface CourseInterface {
    courseTitle: "Web" | "Machine Learning" | "C#";
    steps: StepInterface[];
    progress: number;
    startDate: Date;
    endDate: Date;
}

interface StepInterface {
    startDate: Date;
    promises: Date[];
    completeDate: Date;
    studyItems: StudyItemInterface[];
    tasks: TaskInterface[];
    mentoringCourse: MentoringCourseInterface;
    youtubeLink: string;
    coordinatorNote: string[];
    technicalMentorsNote: string[];
    mentorsNote: string[];
    isDone: () => boolean;
}

interface StudyItemInterface {
    title: string;
    telegramPost: [string, Date][];
    tweeterPost: [string, Date][];
    linkedinPost: [string, Date][];
    isDone: () => boolean;
}

interface TaskInterface {
    title: string;
    telegramPost: [string, Date][];
    tweeterPost: [string, Date][];
    linkedinPost: [string, Date][];
    jsfiddleLink?: string;
    githubLink?: string;
    isDone: () => boolean;
}

interface MentoringCourseInterface {
    courseTitle: "Communication" | "Couching";
    videoLinks: string[];
    videoReportLinks: string[];
    progress: () => number;
    isDone: () => boolean;
    notes: string[];
}

// Classes:

class Intern implements InternInterface {
    fullName: string;
    course: CourseInterface;
    animal: string;
    coordinators: string[];
    commitment: CommitmentInterface;
    generalInfo: GeneralInfoInterface;
    contactInfo: ContactInfoInterface;
    socialLinks: SocialLinksInterface;

    constructor(
        fullName: string,
        course: CourseInterface,
        animal: string,
        coordinators: string[],
        commitment: CommitmentInterface,
        generalInfo: GeneralInfoInterface,
        contactInfo: ContactInfoInterface,
        socialLinks: SocialLinksInterface
    ) {
        this.fullName = fullName;
        this.course = course;
        this.animal = animal;
        this.coordinators = coordinators;
        this.commitment = commitment;
        this.generalInfo = generalInfo;
        this.contactInfo = contactInfo;
        this.socialLinks = socialLinks;
    }

    currentStep(): number {
        return 0;
    }
}

class Commitment implements CommitmentInterface {
    text: string;
    date: Date;

    constructor(text: string, date: Date) {
        this.text = text;
        this.date = date;
    }
}

class GeneralInfo implements GeneralInfoInterface {
    city: string;
    university: string;
    fieldOfStudy: string;
    experiences: string;

    constructor(
        city: string,
        university: string,
        fieldOfStudy: string,
        experiences: string
    ) {
        this.city = city;
        this.university = university;
        this.fieldOfStudy = fieldOfStudy;
        this.experiences = experiences;
    }
}

class ContactInfo implements ContactInfoInterface {
    phone: string;
    email: string;
    telegram: string;
    skype: string;

    constructor(phone: string, email: string, telegram: string, skype: string) {
        this.phone = phone;
        this.email = email;
        this.telegram = telegram;
        this.skype = skype;
    }
}

class SocialLinks implements SocialLinksInterface {
    linkedin: string;
    twitter: string;
    github: string;
    jsfiddle: string;
    stackoverflow: string;
    repl: string;
    typingClub: string;

    constructor(
        linkedin: string,
        twitter: string,
        github: string,
        jsfiddle: string,
        stackoverflow: string,
        repl: string,
        typingClub: string
    ) {
        this.linkedin = linkedin;
        this.twitter = twitter;
        this.github = github;
        this.jsfiddle = jsfiddle;
        this.stackoverflow = stackoverflow;
        this.repl = repl;
        this.typingClub = typingClub;
    }
}

class Course implements CourseInterface {
    courseTitle: "Web" | "Machine Learning" | "C#";
    steps: StepInterface[];
    progress: number;
    startDate: Date;
    endDate: Date;

    constructor(
        courseTitle: "Web" | "Machine Learning" | "C#",
        steps: StepInterface[],
        progress: number,
        startDate: Date,
        endDate: Date
    ) {
        this.courseTitle = courseTitle;
        this.steps = steps;
        this.progress = progress;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Step implements StepInterface {
    startDate: Date;
    promises: Date[];
    completeDate: Date;
    studyItems: StudyItemInterface[];
    tasks: TaskInterface[];
    mentoringCourse: MentoringCourseInterface;
    youtubeLink: string;
    coordinatorNote: string[];
    technicalMentorsNote: string[];
    mentorsNote: string[];

    constructor(
        startDate: Date,
        promises: Date[],
        completeDate: Date,
        studyItems: StudyItemInterface[],
        tasks: TaskInterface[],
        mentoringCourse: MentoringCourseInterface,
        youtubeLink: string,
        coordinatorNote: string[],
        technicalMentorsNote: string[],
        mentorsNote: string[]
    ) {
        this.startDate = startDate;
        this.promises = promises;
        this.completeDate = completeDate;
        this.studyItems = studyItems;
        this.tasks = tasks;
        this.mentoringCourse = mentoringCourse;
        this.youtubeLink = youtubeLink;
        this.coordinatorNote = coordinatorNote;
        this.technicalMentorsNote = technicalMentorsNote;
        this.mentorsNote = mentorsNote;
    }

    isDone(): boolean {
        return true;
    }
}

class StudyItem implements StudyItemInterface {
    title: string;
    telegramPost: [string, Date][];
    tweeterPost: [string, Date][];
    linkedinPost: [string, Date][];

    constructor(
        title: string,
        telegramPost: [string, Date][],
        tweeterPost: [string, Date][],
        linkedinPost: [string, Date][]
    ) {
        this.title = title;
        this.telegramPost = telegramPost;
        this.tweeterPost = tweeterPost;
        this.linkedinPost = linkedinPost;
    }

    isDone(): boolean {
        return true;
    }
}

class Task implements TaskInterface {
    title: string;
    telegramPost: [string, Date][];
    tweeterPost: [string, Date][];
    linkedinPost: [string, Date][];
    jsfiddleLink?: string;
    githubLink?: string;

    constructor(
        title: string,
        telegramPost: [string, Date][],
        tweeterPost: [string, Date][],
        linkedinPost: [string, Date][],
        jsfiddleLink?: string,
        githubLink?: string
    ) {
        this.title = title;
        this.telegramPost = telegramPost;
        this.tweeterPost = tweeterPost;
        this.linkedinPost = linkedinPost;
        this.jsfiddleLink = jsfiddleLink;
        this.githubLink = githubLink;
    }

    isDone(): boolean {
        return true;
    }
}

class MentoringCourse implements MentoringCourseInterface {
    courseTitle: "Communication" | "Couching";
    videoLinks: string[];
    videoReportLinks: string[];
    notes: string[];

    constructor(
        courseTitle: "Communication" | "Couching",
        videoLinks: string[],
        videoReportLinks: string[],
        notes: string[]
    ) {
        this.courseTitle = courseTitle;
        this.videoLinks = videoLinks;
        this.videoReportLinks = videoReportLinks;
        this.notes = notes;
    }

    progress(): number {
        return 0;
    }

    isDone(): boolean {
        return true;
    }
}
