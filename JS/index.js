"use strict";
class Intern {
    fullName;
    course;
    animal;
    coordinators;
    commitment;
    generalInfo;
    contactInfo;
    socialLinks;
    constructor(fullName, course, animal, coordinators, commitment, generalInfo, contactInfo, socialLinks) {
        this.fullName = fullName;
        this.course = course;
        this.animal = animal;
        this.coordinators = coordinators;
        this.commitment = commitment;
        this.generalInfo = generalInfo;
        this.contactInfo = contactInfo;
        this.socialLinks = socialLinks;
    }
    currentStep() {
        return 0;
    }
}
class Commitment {
    text;
    date;
    constructor(text, date) {
        this.text = text;
        this.date = date;
    }
}
class GeneralInfo {
    city;
    university;
    fieldOfStudy;
    experiences;
    constructor(city, university, fieldOfStudy, experiences) {
        this.city = city;
        this.university = university;
        this.fieldOfStudy = fieldOfStudy;
        this.experiences = experiences;
    }
}
class ContactInfo {
    phone;
    email;
    telegram;
    skype;
    constructor(phone, email, telegram, skype) {
        this.phone = phone;
        this.email = email;
        this.telegram = telegram;
        this.skype = skype;
    }
}
class SocialLinks {
    linkedin;
    twitter;
    github;
    jsfiddle;
    stackoverflow;
    repl;
    typingClub;
    constructor(linkedin, twitter, github, jsfiddle, stackoverflow, repl, typingClub) {
        this.linkedin = linkedin;
        this.twitter = twitter;
        this.github = github;
        this.jsfiddle = jsfiddle;
        this.stackoverflow = stackoverflow;
        this.repl = repl;
        this.typingClub = typingClub;
    }
}
class Course {
    courseTitle;
    steps;
    progress;
    startDate;
    endDate;
    constructor(courseTitle, steps, progress, startDate, endDate) {
        this.courseTitle = courseTitle;
        this.steps = steps;
        this.progress = progress;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class Step {
    startDate;
    promises;
    completeDate;
    studyItems;
    tasks;
    mentoringCourse;
    youtubeLink;
    coordinatorNote;
    technicalMentorsNote;
    mentorsNote;
    constructor(startDate, promises, completeDate, studyItems, tasks, mentoringCourse, youtubeLink, coordinatorNote, technicalMentorsNote, mentorsNote) {
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
    isDone() {
        return true;
    }
}
class StudyItem {
    title;
    telegramPost;
    tweeterPost;
    linkedinPost;
    constructor(title, telegramPost, tweeterPost, linkedinPost) {
        this.title = title;
        this.telegramPost = telegramPost;
        this.tweeterPost = tweeterPost;
        this.linkedinPost = linkedinPost;
    }
    isDone() {
        return true;
    }
}
class Task {
    title;
    telegramPost;
    tweeterPost;
    linkedinPost;
    jsfiddleLink;
    githubLink;
    constructor(title, telegramPost, tweeterPost, linkedinPost, jsfiddleLink, githubLink) {
        this.title = title;
        this.telegramPost = telegramPost;
        this.tweeterPost = tweeterPost;
        this.linkedinPost = linkedinPost;
        this.jsfiddleLink = jsfiddleLink;
        this.githubLink = githubLink;
    }
    isDone() {
        return true;
    }
}
class MentoringCourse {
    courseTitle;
    videoLinks;
    videoReportLinks;
    notes;
    constructor(courseTitle, videoLinks, videoReportLinks, notes) {
        this.courseTitle = courseTitle;
        this.videoLinks = videoLinks;
        this.videoReportLinks = videoReportLinks;
        this.notes = notes;
    }
    progress() {
        return 0;
    }
    isDone() {
        return true;
    }
}
function getRandomDate(start, end) {
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return `${randomDate.getFullYear()}/${(randomDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${randomDate.getDate().toString().padStart(2, "0")}`;
}
const commitment = new Commitment("Commitment text", getRandomDate(new Date(2023, 0, 1), new Date()));
const generalInfo = new GeneralInfo("CityName", "UniversityName", "FieldOfStudy", "Some experiences");
const contactInfo = new ContactInfo("123456789", "ali909392@gmail.com", "@Ali_Sdg90", "idk");
const socialLinks = new SocialLinks("#", "#", "#", "#", "#", "#", "#");
const mentoringCourse = new MentoringCourse("Communication", ["#video1", "#video2"], ["#report1", "#report2"], ["Note1", "Note2"]);
const studyItems = Array.from({ length: 6 }, (_, studyItemIndex) => {
    return new StudyItem(`StudyItem${studyItemIndex + 1}`, [
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
    ], [
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
    ], [
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
    ]);
});
const tasks = Array.from({ length: 7 }, (_, taskIndex) => {
    return new Task(`Task${taskIndex + 1}`, [
        ["Telegram post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ["Twitter post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ["LinkedIn post", getRandomDate(new Date(2022, 0, 1), new Date())],
    ], [
        ["Telegram post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ["Twitter post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ["LinkedIn post", getRandomDate(new Date(2022, 0, 1), new Date())],
    ], [
        ["Telegram post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ["Twitter post", getRandomDate(new Date(2022, 0, 1), new Date())],
        ["LinkedIn post", getRandomDate(new Date(2022, 0, 1), new Date())],
    ], "#jsfiddleLink", "#githubLink");
});
const steps = Array.from({ length: 10 }, (_, index) => {
    return new Step(getRandomDate(new Date(2022, 0, 1), new Date()), [getRandomDate(new Date(2022, 0, 1), new Date())], getRandomDate(new Date(2022, 0, 1), new Date()), studyItems, tasks, mentoringCourse, "#youtubeLink", [`Coordinator note ${index + 1}`], [`Technical mentor note ${index + 1}`], [`Mentor note ${index + 1}`]);
});
const course = new Course("Web", steps, 0, getRandomDate(new Date(2022, 0, 1), new Date()), getRandomDate(new Date(2022, 0, 1), new Date()));
const ali = new Intern("Ali", course, "Cat", [
    "Mohsen Saniee",
    "Mostafa Zeighami ",
    "Ali Hesaraki",
    "Faegheh Mohammadian",
], commitment, generalInfo, contactInfo, socialLinks);
console.log(ali);
const bigObj = document.querySelector(".bigObj");
bigObj.innerHTML = JSON.stringify(ali, null, 2);
console.log(bigObj.innerHTML);
//# sourceMappingURL=index.js.map