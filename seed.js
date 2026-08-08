const connectToDB = require('./config/db.js')
const dotenv = require("dotenv").config()

const Domain= require('./models/Domain.js')

connectToDB()

async function seedDB() {
    try {
        await Domain.deleteMany({});
        const domains = await Domain.insertMany(
            [
                {
                    domainName: "Health & Fitness",
                    description: "Improve your physical health, fitness, nutrition, and overall wellbeing."
                },
                {
                    domainName: "Beauty & Self-Care",
                    description: "Focus on skincare, haircare, grooming, and personal self-care."
                },
                {
                    domainName: "Mental & Emotional Wellbeing",
                    description: "Build emotional resilience, confidence, mindfulness, and a healthier mindset."
                },
                {
                    domainName: "Education & Learning",
                    description: "Develop knowledge, learn new skills, and achieve educational goals."
                },
                {
                    domainName: "Career & Professional Growth",
                    description: "Work toward career goals, professional skills, and future opportunities."
                },
                {
                    domainName: "Finance",
                    description: "Manage money, improve saving habits, and achieve financial goals."
                },
                {
                    domainName: "Relationships & Social Life",
                    description: "Strengthen relationships, friendships, communication, and social connections."
                },
                {
                    domainName: "Lifestyle & Personal Growth",
                    description: "Build better habits, improve productivity, explore hobbies, and grow personally."
                }
            ])
    } catch (err) {
        console.error("Seeding error:", err)
    }
}

seedDB()