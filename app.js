import mongoose from 'mongoose';
import dbConnect from './config/database.js';
import { faker } from '@faker-js/faker';

const shouldDeleteUser = false; 

/*
A variável shouldDeleteUser controla se o usuário será deletado.
true → Usuário será deletado.
false → Usuário não será deletado.
*/

try {
    const start = Date.now();

    await dbConnect();
    console.log('MongoDB connected');

    const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    });

    userSchema.pre('save', function (next) {
        this.updatedAt = Date.now();
        next();
    });

    userSchema.pre('findOneAndUpdate', function (next) {
        this.set({ updatedAt: Date.now() });
        next();
    });

    const TesteUser = mongoose.model("TesteUser", userSchema);

    const user = new TesteUser({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(12),
    });

    const doc = await user.save();
    const customerId = doc._id.toString();    
    console.log(`User created successfully. Customer ID: ${customerId}`);
    console.log('Saved User:', doc);

    const userById = await TesteUser.findById(customerId);
    console.log('Queried User by ID:', userById);

    const updatedUser = await TesteUser.findOneAndUpdate(
        { _id: customerId },
        { name: faker.person.fullName() },
        { new: true, runValidators: true }
    );
    console.log('Updated User:', updatedUser);

    // **Verifica a variável para deletar o usuário**
    if (shouldDeleteUser) {
        const deletedUser = await TesteUser.findByIdAndDelete(customerId);
        if (deletedUser) {
            console.log(`User with ID ${customerId} deleted successfully.`);
        } else {
            console.log('User not found.');
        }
    } else {
        console.log('User not deleted by configuration.');
    }

    const executionTime = Date.now() - start;
    console.log(`Execution time: ${executionTime} ms`);

} catch (error) {
    console.error('Error occurred:', error.message);
} finally {
    setTimeout(async () => {
        try {
            if (mongoose.connection.readyState === 1) {
                await mongoose.connection.close();
                console.log('MongoDB connection closed.');
            }
        } catch (closeError) {
            console.error('Error closing MongoDB connection:', closeError.message);
        } finally {
            process.exit(0);
        }
    }, 1000);
}
