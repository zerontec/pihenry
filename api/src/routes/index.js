const { Router } = require('express');

const router = Router() 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const{
    getRecipeId,
    getRecipes,
    getTypes,
    postRecipe

}=require('./controller')



router.get('/recipes', getRecipes)
router.get('/types', getTypes);
router.get('/recipes/:id', getRecipeId);
router.post('/recipe', postRecipe)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);





module.exports = router;
