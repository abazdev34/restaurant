import PocketBase from 'pocketbase';

// const pb = new PocketBase('http://127.0.0.1:8090'); // Локалдык сервер үчүн
// же
 const pb = new PocketBase('https://your-pocketbase-project.pockethost.io'); // Pockethost үчүн

export const getFoodList = async () => {
  try {
    const records = await pb.collection('foods').getFullList(200);
    console.log("Алынган тамактар:", records);
    return records;
  } catch (error) {
    console.error("Тамактар тизмесин алууда ката кетти", error);
    throw error;
  }
};