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
import { TeamService } from "../team.service";
import { TeamCreateInput } from "./TeamCreateInput";
import { Team } from "./Team";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamUpdateInput } from "./TeamUpdateInput";

export class TeamControllerBase {
  constructor(protected readonly service: TeamService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Team })
  async createTeam(@common.Body() data: TeamCreateInput): Promise<Team> {
    return await this.service.createTeam({
      data: data,
      select: {
        createdAt: true,
        id: true,
        industry: true,
        members: true,
        name: true,
        updatedAt: true,
        websiteUrl: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Team] })
  @ApiNestedQuery(TeamFindManyArgs)
  async teams(@common.Req() request: Request): Promise<Team[]> {
    const args = plainToClass(TeamFindManyArgs, request.query);
    return this.service.teams({
      ...args,
      select: {
        createdAt: true,
        id: true,
        industry: true,
        members: true,
        name: true,
        updatedAt: true,
        websiteUrl: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async team(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    const result = await this.service.team({
      where: params,
      select: {
        createdAt: true,
        id: true,
        industry: true,
        members: true,
        name: true,
        updatedAt: true,
        websiteUrl: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTeam(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() data: TeamUpdateInput
  ): Promise<Team | null> {
    try {
      return await this.service.updateTeam({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          industry: true,
          members: true,
          name: true,
          updatedAt: true,
          websiteUrl: true,
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
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTeam(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    try {
      return await this.service.deleteTeam({
        where: params,
        select: {
          createdAt: true,
          id: true,
          industry: true,
          members: true,
          name: true,
          updatedAt: true,
          websiteUrl: true,
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
