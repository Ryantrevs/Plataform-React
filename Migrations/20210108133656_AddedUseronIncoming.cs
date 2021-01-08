using Microsoft.EntityFrameworkCore.Migrations;

namespace PlataformaTccSuporte.Migrations
{
    public partial class AddedUseronIncoming : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userId",
                table: "Income",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Income_userId",
                table: "Income",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Income_AspNetUsers_userId",
                table: "Income",
                column: "userId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Income_AspNetUsers_userId",
                table: "Income");

            migrationBuilder.DropIndex(
                name: "IX_Income_userId",
                table: "Income");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "Income");
        }
    }
}
