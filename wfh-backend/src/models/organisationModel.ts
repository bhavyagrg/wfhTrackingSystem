import mongoose, { Document, Schema, Model } from "mongoose";

export interface IOrganisation extends Document {
  org_name: string;
  name: string;
  max_wfh_days?: number;
  is_active?: boolean;
}

const organisationSchema: Schema<IOrganisation> = new Schema({
  org_name: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  max_wfh_days: { type: Number },
  is_active: { type: Boolean, default: true },
});

const Organisation: Model<IOrganisation> = mongoose.model<IOrganisation>(
  "Organisation",
  organisationSchema
);

export default Organisation;
