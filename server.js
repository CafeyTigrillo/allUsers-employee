const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const swaggerDocument = YAML.load('./docs/swagger.yaml');  

const app = express();
const port = 3000;

const corsOptions = {
    origin: '*', 
    methods: 'GET', 
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
