import { DataTypes, EnumDataType, Model, Optional } from 'sequelize';
import db from '../configs/database';

interface CategoryAttributes {
    id: string;
    title: string;
    description: string;
}

interface CategoryCreationAttributes
    extends Optional<CategoryAttributes, 'id'> { }

interface CategoryInstance
    extends Model<CategoryAttributes, CategoryCreationAttributes>,
    CategoryAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Category = db.define<CategoryInstance>(
    'categories',
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
        description: {
            allowNull: true,
            type: DataTypes.TEXT,
        },

    }
);

export { Category};