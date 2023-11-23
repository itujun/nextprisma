import { PrismaClient } from '@prisma/client';

let prisma;

// pengecekan kondisi, apakah proses sedang berjalan di prodcution atau developer
if (process.env.NODE_ENV === 'production') {
    // jika dalam mode production, saya akan menginisialisasi dengan prisma baru
    prisma = new PrismaClient();
} else {
    // jika dalam mode development, saya akan menginisialisasi dengan prisma lama
    // cek apakah saya sudah menginisialisasi prisma sebelumnya
    if (!global.prisma) {
        // jika belum, maka saya akan menginisialisasi prisma
        global.prisma = new PrismaClient();
    }
    // lalu saya akan menyimpannya pada variabel prisma
    prisma = global.prisma;
}

// terakhir, ekspor variabel prisma
export default prisma;