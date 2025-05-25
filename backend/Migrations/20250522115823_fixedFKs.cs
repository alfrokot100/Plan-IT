using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeamApp.Migrations
{
    /// <inheritdoc />
    public partial class fixedFKs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Goals_GoalID_FK",
                table: "Tasks");

            migrationBuilder.DropTable(
                name: "Goals");

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    ProjectID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID_FK = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Deadline = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.ProjectID);
                    table.ForeignKey(
                        name: "FK_Projects_Users_UserID_FK",
                        column: x => x.UserID_FK,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Projects_UserID_FK",
                table: "Projects",
                column: "UserID_FK");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Projects_GoalID_FK",
                table: "Tasks",
                column: "GoalID_FK",
                principalTable: "Projects",
                principalColumn: "ProjectID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Projects_GoalID_FK",
                table: "Tasks");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.CreateTable(
                name: "Goals",
                columns: table => new
                {
                    GoalID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID_FK = table.Column<int>(type: "int", nullable: false),
                    Deadline = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Priority = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Goals", x => x.GoalID);
                    table.ForeignKey(
                        name: "FK_Goals_Users_UserID_FK",
                        column: x => x.UserID_FK,
                        principalTable: "Users",
                        principalColumn: "UserID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Goals_UserID_FK",
                table: "Goals",
                column: "UserID_FK");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Goals_GoalID_FK",
                table: "Tasks",
                column: "GoalID_FK",
                principalTable: "Goals",
                principalColumn: "GoalID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
