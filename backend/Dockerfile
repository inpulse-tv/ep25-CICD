FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

WORKDIR /source

COPY ./ ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /source/out .
USER nobody
ENTRYPOINT ["dotnet", "macro-api.dll"]