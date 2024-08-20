export const getFoodList = async () => {
  try {
    const records = await pb.collection('food_name').getFullList(200);
    console.log("Алынган тамактар:", records);
    return records;
  } catch (error) {
    console.error("Тамактар тизмесин алууда ката кетти:", error);
    throw error;
  }
};