import { DataTypes, EnumDataType, Model, Optional } from 'sequelize';
import db from '../configs/database';
import { Category } from './category';

interface PostAttributes {
    id: string;
    title: string;
    body: string;
    categoryId: string;
    status: "active" | "blocked";
    meta: Object;
}

interface PostCreationAttributes
    extends Optional<PostAttributes, 'id'> { }

interface PostInstance
    extends Model<PostAttributes, PostCreationAttributes>,
    PostAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Post = db.define<PostInstance>(
    'posts',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        body: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM("published", "pending"),
            defaultValue: "published",
        },
        meta: {
            allowNull: true,
            type: DataTypes.JSONB,
        },
    }
);

Post.belongsTo(Category, {
    foreignKey: 'categoryId'
})

export { Post };