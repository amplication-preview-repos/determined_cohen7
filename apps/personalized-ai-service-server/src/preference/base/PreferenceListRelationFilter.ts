/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PreferenceWhereInput } from "./PreferenceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PreferenceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PreferenceWhereInput,
  })
  @ValidateNested()
  @Type(() => PreferenceWhereInput)
  @IsOptional()
  @Field(() => PreferenceWhereInput, {
    nullable: true,
  })
  every?: PreferenceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PreferenceWhereInput,
  })
  @ValidateNested()
  @Type(() => PreferenceWhereInput)
  @IsOptional()
  @Field(() => PreferenceWhereInput, {
    nullable: true,
  })
  some?: PreferenceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PreferenceWhereInput,
  })
  @ValidateNested()
  @Type(() => PreferenceWhereInput)
  @IsOptional()
  @Field(() => PreferenceWhereInput, {
    nullable: true,
  })
  none?: PreferenceWhereInput;
}
export { PreferenceListRelationFilter as PreferenceListRelationFilter };
