/**
 * @swagger
 * /api/purchases:
 *   post:
 *     summary: Create a purchase
 *     tags:
 *       - Purchase
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Purchase'
 *     responses:
 *       201:
 *         description: Purchase created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Purchase'
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 *
 *   get:
 *     summary: Get all purchases
 *     tags:
 *       - Purchase
 *     responses:
 *       200:
 *         description: Successful request
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Purchase'
 *       500:
 *         description: Internal server error
 *
 *   /{id}:
 *     get:
 *       summary: Get a purchase by ID
 *       tags:
 *         - Purchase
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Purchase ID
 *       responses:
 *         200:
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Purchase'
 *         404:
 *           description: Purchase not found
 *         500:
 *           description: Internal server error
 *
 *     patch:
 *       summary: Update a purchase by ID
 *       tags:
 *         - Purchase
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Purchase ID
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Purchase'
 *       responses:
 *         200:
 *           description: Successful request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Purchase'
 *         404:
 *           description: Purchase not found
 *         500:
 *           description: Internal server error
 *
 *     delete:
 *       summary: Delete a purchase by ID
 *       tags:
 *         - Purchase
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Purchase ID
 *       responses:
 *         204:
 *           description: Successful request
 *         404:
 *           description: Purchase not found
 *         500:
 *           description: Internal server error
 */
