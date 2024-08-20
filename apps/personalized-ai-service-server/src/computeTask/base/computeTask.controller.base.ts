/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ComputeTaskService } from "../computeTask.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ComputeTaskCreateInput } from "./ComputeTaskCreateInput";
import { ComputeTask } from "./ComputeTask";
import { ComputeTaskFindManyArgs } from "./ComputeTaskFindManyArgs";
import { ComputeTaskWhereUniqueInput } from "./ComputeTaskWhereUniqueInput";
import { ComputeTaskUpdateInput } from "./ComputeTaskUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ComputeTaskControllerBase {
  constructor(
    protected readonly service: ComputeTaskService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ComputeTask })
  @nestAccessControl.UseRoles({
    resource: "ComputeTask",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createComputeTask(
    @common.Body() data: ComputeTaskCreateInput
  ): Promise<ComputeTask> {
    return await this.service.createComputeTask({
      data: data,
      select: {
        createdAt: true,
        id: true,
        result: true,
        status: true,
        taskName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ComputeTask] })
  @ApiNestedQuery(ComputeTaskFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ComputeTask",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async computeTasks(@common.Req() request: Request): Promise<ComputeTask[]> {
    const args = plainToClass(ComputeTaskFindManyArgs, request.query);
    return this.service.computeTasks({
      ...args,
      select: {
        createdAt: true,
        id: true,
        result: true,
        status: true,
        taskName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ComputeTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComputeTask",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async computeTask(
    @common.Param() params: ComputeTaskWhereUniqueInput
  ): Promise<ComputeTask | null> {
    const result = await this.service.computeTask({
      where: params,
      select: {
        createdAt: true,
        id: true,
        result: true,
        status: true,
        taskName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ComputeTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComputeTask",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateComputeTask(
    @common.Param() params: ComputeTaskWhereUniqueInput,
    @common.Body() data: ComputeTaskUpdateInput
  ): Promise<ComputeTask | null> {
    try {
      return await this.service.updateComputeTask({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          result: true,
          status: true,
          taskName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ComputeTask })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ComputeTask",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteComputeTask(
    @common.Param() params: ComputeTaskWhereUniqueInput
  ): Promise<ComputeTask | null> {
    try {
      return await this.service.deleteComputeTask({
        where: params,
        select: {
          createdAt: true,
          id: true,
          result: true,
          status: true,
          taskName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
