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
    date: string;
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
    startDate: string;
    endDate: string;
}

interface StepInterface {
    startDate: string;
    promises: string[];
    completeDate: string;
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
    telegramPost: [string, string][];
    tweeterPost: [string, string][];
    linkedinPost: [string, string][];
    isDone: () => boolean;
}

interface TaskInterface {
    title: string;
    telegramPost: [string, string][];
    tweeterPost: [string, string][];
    linkedinPost: [string, string][];
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
    date: string;

    constructor(text: string, date: string) {
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
    startDate: string;
    endDate: string;

    constructor(
        courseTitle: "Web" | "Machine Learning" | "C#",
        steps: StepInterface[],
        progress: number,
        startDate: string,
        endDate: string
    ) {
        this.courseTitle = courseTitle;
        this.steps = steps;
        this.progress = progress;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Step implements StepInterface {
    startDate: string;
    promises: string[];
    completeDate: string;
    studyItems: StudyItemInterface[];
    tasks: TaskInterface[];
    mentoringCourse: MentoringCourseInterface;
    youtubeLink: string;
    coordinatorNote: string[];
    technicalMentorsNote: string[];
    mentorsNote: string[];

    constructor(
        startDate: string,
        promises: string[],
        completeDate: string,
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
    telegramPost: [string, string][];
    tweeterPost: [string, string][];
    linkedinPost: [string, string][];

    constructor(
        title: string,
        telegramPost: [string, string][],
        tweeterPost: [string, string][],
        linkedinPost: [string, string][]
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
    telegramPost: [string, string][];
    tweeterPost: [string, string][];
    linkedinPost: [string, string][];
    jsfiddleLink?: string;
    githubLink?: string;

    constructor(
        title: string,
        telegramPost: [string, string][],
        tweeterPost: [string, string][],
        linkedinPost: [string, string][],
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

function getRandomDate(start: Date, end: Date): string {
    const randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return `${randomDate.getFullYear()}/${(randomDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${randomDate.getDate().toString().padStart(2, "0")}`;
}

const commitment = new Commitment(
    "Commitment text",
    getRandomDate(new Date(2023, 0, 1), new Date())
);

const generalInfo = new GeneralInfo(
    "CityName",
    "UniversityName",
    "FieldOfStudy",
    "Some experiences"
);

const contactInfo = new ContactInfo(
    "123456789",
    "ali909392@gmail.com",
    "@Ali_Sdg90",
    "idk"
);

const socialLinks = new SocialLinks("#", "#", "#", "#", "#", "#", "#");

const mentoringCourse = new MentoringCourse(
    "Communication",
    ["#video1", "#video2"],
    ["#report1", "#report2"],
    ["Note1", "Note2"]
);

const studyItems: StudyItemInterface[] = Array.from(
    { length: 6 },
    (_, studyItemIndex) => {
        return new StudyItem(
            `StudyItem${studyItemIndex + 1}`,
            [
                [
                    "Telegram post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
                [
                    "Twitter post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
                [
                    "LinkedIn post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
            ],
            [
                [
                    "Telegram post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
                [
                    "Twitter post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
                [
                    "LinkedIn post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
            ],
            [
                [
                    "Telegram post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
                [
                    "Twitter post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
                [
                    "LinkedIn post",
                    getRandomDate(new Date(2022, 0, 1), new Date()),
                ],
            ]
        );
    }
);

const tasks: TaskInterface[] = Array.from({ length: 7 }, (_, taskIndex) => {
    return new Task(
        `Task${taskIndex + 1}`,
        [
            ["Telegram post", getRandomDate(new Date(2022, 0, 1), new Date())],
            ["Twitter post", getRandomDate(new Date(2022, 0, 1), new Date())],
            ["LinkedIn post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ],
        [
            ["Telegram post", getRandomDate(new Date(2022, 0, 1), new Date())],
            ["Twitter post", getRandomDate(new Date(2022, 0, 1), new Date())],
            ["LinkedIn post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ],
        [
            ["Telegram post", getRandomDate(new Date(2022, 0, 1), new Date())],
            ["Twitter post", getRandomDate(new Date(2022, 0, 1), new Date())],
            ["LinkedIn post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ],
        "#jsfiddleLink",
        "#githubLink"
    );
});

const steps: StepInterface[] = Array.from({ length: 10 }, (_, index) => {
    return new Step(
        getRandomDate(new Date(2022, 0, 1), new Date()),
        [getRandomDate(new Date(2022, 0, 1), new Date())],
        getRandomDate(new Date(2022, 0, 1), new Date()),
        studyItems,
        tasks,
        mentoringCourse,
        "#youtubeLink",
        [`Coordinator note ${index + 1}`],
        [`Technical mentor note ${index + 1}`],
        [`Mentor note ${index + 1}`]
    );
});

const course = new Course(
    "Web",
    steps,
    0,
    getRandomDate(new Date(2022, 0, 1), new Date()),
    getRandomDate(new Date(2022, 0, 1), new Date())
);

const ali = new Intern(
    "Ali",
    course,
    "Cat",
    [
        "Mohsen Saniee",
        "Mostafa Zeighami ",
        "Ali Hesaraki",
        "Faegheh Mohammadian",
    ],
    commitment,
    generalInfo,
    contactInfo,
    socialLinks
);

console.log(ali);

const bigObj = document.querySelector(".bigObj") as HTMLElement;

bigObj.innerHTML = JSON.stringify(ali, null, 2);

console.log(bigObj.innerHTML);
