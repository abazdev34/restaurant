const loadFoodList = async () => {
  try {
    const list = await getFoodList();
    console.log("Жүктөлгөн тамактар тизмеси:", list);
    setFoodList(list);
  } catch (error) {
    console.error("Тамактар тизмесин жүктөөдө ката кетти", error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const newFood = {
      name,
      price: Number(price),
      comment,
      date: new Date().toISOString()
    };
    const addedFood = await addFood(newFood);
    console.log("Кошулган жаңы тамак:", addedFood);
    setName('');
    setPrice('');
    setComment('');
    await loadFoodList(); // Тизмени жаңыртуу
    console.log("Тизме жаңыртылды");
  } catch (error) {
    console.error("Тамак кошууда ката кетти", error);
  }
};