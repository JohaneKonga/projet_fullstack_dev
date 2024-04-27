/**
 * @swagger
 * /api/offers:
 *  post:
 *    summary: Create a new offer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Offer'
 *    responses: 
 *      201:
 *        description: Offer created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Offer'
 *      400:
 *        description: Invalid request data
 *      500:
 *        description: Internal server error
 *  get:
 *    summary: Get all offers
 *    responses:
 *      200:
 *        description: List of offers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Offer'
 *      500:
 *        description: Internal server error
 *  /{id}:
 *    get:
 *      summary: Get an offer by id
 *      parameters:
 *        - name: id
 *          schema:
 *            type: string
 *          in: path
 *          required: true
 *          description: The offer id
 *      responses:
 *        200:
 *          description: The offer
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Offer'
 *        404:
 *          description: Offer not found
 *        500:
 *          description: Internal server error
 *    patch:
 *      summary: Update an offer by id
 *      parameters:
 *        - name: id
 *          schema:
 *            type: string
 *          in: path
 *          required: true
 *          description: The offer id
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Offer'
 *      responses:
 *        200:
 *          description: The updated offer
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Offer'
 *        404:
 *          description: Offer not found
 *        500:
 *          description: Internal server error
 *    delete:
 *      summary: Delete an offer by id
 *      parameters:
 *        - name: id
 *          schema:
 *            type: string
 *          in: path
 *          required: true
 *          description: The offer id
 *      responses:
 *        204:
 *          description: Offer deleted successfully
 *        404:
 *          description: Offer not found
 *        500:
 *          description: Internal server error
 */
