import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'

dbConnect()

export default async (req,res) => {
    const { method, body} = req

    switch(method) {
        case 'GET':
            try {
                const user = await User.find({})
                res.status(200).json({success: true,
                data: user})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case 'POST':
            try {
                const users = await User.create(body)
                res.status(201).json({success: true,
                data: users})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default: 
            res.status(400)
            break;
    }
}